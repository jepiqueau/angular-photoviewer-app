import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { PhotoViewer, Image, ViewerOptions,
  capShowOptions, capShowResult} from '@capacitor-community/photoviewer';
import { Capacitor } from '@capacitor/core';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-photoviewer',
  templateUrl: './photoviewer.component.html',
  styleUrls: ['./photoviewer.component.scss'],
})
export class PhotoviewerComponent implements AfterViewInit {

  @Input() imageList: Image[] = [];
  @Input() mode = '';
  @Input() startFrom = 0;
  @Output() pvExit: EventEmitter<any> = new EventEmitter();

  platform: string;
  options: ViewerOptions = {} as ViewerOptions;
  pvPlugin: any;
  constructor() {
    this.platform = Capacitor.getPlatform();
    this.pvPlugin = PhotoViewer;
   }

  async ngAfterViewInit() {
    const show = async (imageList: Image[], mode: string,
              startFrom: number,options?: ViewerOptions): Promise<capShowResult> => {
      const opt: capShowOptions = {} as capShowOptions;
      opt.images = imageList;
      opt.mode = mode;
      if( mode === 'one' || mode === 'slider') {
        opt.startFrom = startFrom;
      }
      if(options) {
        opt.options = options;
      }
      try {
          const ret = await this.pvPlugin.show(opt);
          if(ret.result) {
              return Promise.resolve(ret);
          } else {
              return Promise.reject(ret.message);
          }
      } catch (err) {
          const ret: capShowResult = {} as capShowResult;
          ret.result = false;
          ret.message = err.message;
          return Promise.reject(err.message);
      }
    };
    const showToast = async (message: string) => {
      await Toast.show({
          text: message,
          position: 'center',
      });
    };

    const echo = await this.pvPlugin.echo({value:'Hello from PhotoViewer'});
     if(!echo.value) {
      await showToast('no value to echo');
    } else {
      await showToast(`echo ${echo.value}`);
    }
    this.pvPlugin.addListener('jeepCapPhotoViewerExit',
    (e: any) => {
      this.pvExit.emit(e);
    });

    try {
      // **************************************
      // here you defined the different options
      // **************************************
      // uncomment the following desired lines below
      // this.options.title = false;
      // this.options.share = false;
      // this.options.transformer = "depth";
      // this.options.spancount = 2
      this.options.maxzoomscale = 3;
      this.options.compressionquality = 0.6;
      this.options.movieoptions = {mode: 'portrait', imagetime: 3};
      if (this.imageList != null && this.imageList.length > 0) {
        const result = await show(this.imageList, this.mode, this.startFrom, this.options);
        // base64 images call
        //ret = await show(base64List, options);
        if(!result.result) {
            await showToast(JSON.stringify(result));
        }
        if(result.result && Object.keys(result).includes('message')) {
            await showToast(JSON.stringify(result));
        }
      }
    } catch (err) {
        await showToast(err);
        if(this.platform === 'web' || this.platform === 'electron') {
            window.location.reload();
        }
    }

  }
}
