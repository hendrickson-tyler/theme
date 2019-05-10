import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { BaseModel } from './base';
import * as frameModule from 'tns-core-modules/ui/frame';
import {Color} from "tns-core-modules/color";
import {topmost} from 'tns-core-modules/ui/frame';

export class ProgressModel extends BaseModel {

}

export function navigatingTo(args: EventData) {
    var page = <Page>args.object;
    page.bindingContext = new ProgressModel(page);
}

export function loaded(args){
  var page = <Page>args.object;
  
    if (page.ios) {
        var navigationBar = frameModule.topmost().ios.controller.navigationBar;        
        navigationBar.translucent = true;
        navigationBar.barStyle = 1;  
        page.backgroundSpanUnderStatusBar = true; 
        page.actionBarHidden = true;
        var grey = new Color('#4A90E2');
        navigationBar.tintColor = grey.ios;         
        // navigationBar.shadowImage = new UIImage();
        // navigationBar.setBackgroundImageForBarMetrics(new UIImage(), UIBarMetrics.UIBarMetricsDefault)
    }  
}

export function goBack(){
    topmost().navigate({
        moduleName: "pages/login-landing",
        clearHistory: true,
        animated: false
    });   
}