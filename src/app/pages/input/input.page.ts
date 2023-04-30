import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  location: string = '';
  hashtag: string = '';
  place: string = '';
  journey: string = '';
  activatedRoute: any;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private storageService: StorageService
  ) { }

  ngOnInit() { }

  submit() {
    console.log({
      location: this.location,
      hashtag: this.hashtag,
      place: this.place,
      journey: this.journey
    });
  }

  datetimeChange(e: any) {
    console.log('e: ', e);
  }

  async save() {
    const location = this.location;
    const hashtag = this.hashtag;
    const beforePlaceList = await this.storageService.get("placeList")
    const placeList: any[] = beforePlaceList?.length ? beforePlaceList : []

    const newPlace = {
      id: placeList.length,
      location,
      hashtag
    }

    await this.storageService.set("placeList", [...placeList, newPlace])
    const newPlaceList = await this.storageService.get("placeList")
    console.log('newPlaceList: ', newPlaceList);
  }
}


