import {Component, View, NgFor} from 'angular2/angular2';
import {Inject} from 'angular2/di';

import { SETTINGS } from '../../Settings';


@Component({
    selector: 'home',
})
@View({
    templateUrl: SETTINGS.BUILD_PATH + "/main/components/home/home.html",
    directives: [NgFor]
})
export class Home {
    constructor() {

    }
}