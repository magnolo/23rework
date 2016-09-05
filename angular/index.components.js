import {HeaderComponent} from './app/components/header/header.component';
import {ExportChooserComponent} from './app/components/export-chooser/export-chooser.component';
import {ChapterContentComponent} from './app/components/chapter-content/chapter-content.component';
import {CoverComponent} from './app/components/cover/cover.component';
import {MapComponent} from './app/components/map/map.component';
import {CountryChooserComponent} from './app/components/country-chooser/country-chooser.component';
import {DetailsItemChooserComponent} from './app/components/details-item-chooser/details-item-chooser.component';
import {DetailsImageComponent} from './app/components/details-image/details-image.component';


angular.module('app.components')
	.component('header', HeaderComponent)
	.component('exportChooser', ExportChooserComponent)
	.component('chapterContent', ChapterContentComponent)
	.component('cover', CoverComponent)
	.component('map', MapComponent)
	.component('countryChooser', CountryChooserComponent)
	.component('detailsItemChooser', DetailsItemChooserComponent)
	.component('detailsImage', DetailsImageComponent);
