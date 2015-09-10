import {Component, View} from 'angular2/angular2';
import {Router, RouteConfig, RouterLink, RouterOutlet} from 'angular2/router';
import {Inject} from 'angular2/di';

import { SETTINGS } from '../../Settings';

import { Home } from '../home/Home';



@Component({
    selector: 'open-corpora-ua'
})
@View({
    templateUrl: SETTINGS.BUILD_PATH + '/main/components/app/app.html',
    directives: [RouterLink, RouterOutlet]
})
export class App {
    constructor(@Inject(Router) router: Router) {
        router.config([
            { path: '',         as: 'home',     component: Home },
        ]);
    }
}