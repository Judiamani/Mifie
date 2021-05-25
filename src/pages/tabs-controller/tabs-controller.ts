import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MesDonnEsAgricolesPage } from '../mes-donn-es-agricoles/mes-donn-es-agricoles';
import { MonAgriculturePage } from '../mon-agriculture/mon-agriculture';
import { Tab3DefaultPagePage } from '../tab3default-page/tab3default-page';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = MesDonnEsAgricolesPage;
  tab2Root: any = MonAgriculturePage;
  tab3Root: any = Tab3DefaultPagePage;
  constructor(public navCtrl: NavController) {
  }
  
}
