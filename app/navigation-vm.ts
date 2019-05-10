import { topmost } from 'tns-core-modules/ui/frame';
import { BaseModel } from './pages/base';

export class NavigationViewModel extends BaseModel {

	public viewPage(args) {
		let pageName = args.object.pageName;
		let path = pageName === 'main-page' ? pageName : `pages/${pageName}`;
		let navigationEntry = {
			moduleName: path,
			clearHistory: true
		};
		topmost().navigate(navigationEntry);
	}
}