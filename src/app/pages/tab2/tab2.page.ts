import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonModal, NavController } from '@ionic/angular';
import { first } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { OverlayEventDetail } from '@ionic/core/components';
import { sayNow } from 'src/app/utils/date.util';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild(IonModal) modal!: IonModal;

  message = 'Please Login first.';
  name!: string;
  placeList: any[] = []
  Paths!: any[];

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private storageService: StorageService,
  ) { }


  async ionViewWillEnter() {
    this.placeList = await this.storageService.get('placeList')

    if (!this.Paths) {
      this.Paths = [];
    }
    const state = await this.route.queryParams.pipe(first()).toPromise();
    if (state && state['location'] && state['hashtag']) {
      const { location, hashtag } = state;
      const newLocal = { location, hashtag };
      this.Paths.push(newLocal);
    } else {
      this.Paths = [
        { location: 'Surfers Paradise', hashtag: '#Hangout', place: 'f.jipani@griffith.edu.au' },
        { location: 'Broad Beach', hashtag: '#Girlsnight', place: 'f.jipani@griffith.edu.au' },
        { location: 'Southbank', hashtag: '#Moviedate', place: 'jany.jay@example.com' }
      ];
    }
  }

  someFunc() {
    let someList = [
      { id: 1, title: 'title1', content: 'content1' },
      { id: 2, title: 'title2', content: 'content2' },
      { id: 3, title: 'title3', content: 'content3' },
      { id: 4, title: 'title4', content: 'content4' },
      { id: 5, title: 'title5', content: 'content5' },
      { id: 6, title: 'title6', content: 'content6' },
    ]

    const newItem = {
      id: 7,
      title: 'title7',
      content: 'content7'
    }

    // 배열에 값 넣기
    // someList.push(newItem)
    // someList = [...someList, newItem]

    // 아이디가 3인놈 지우기 filter 버젼
    const willDeleteId = 3
    someList = someList.filter(ele => {
      return ele.id !== willDeleteId
    })

    // 아이디가 4인놈 찾기
    const found = someList.find(ele => ele.id === 4)

  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  createPath() {
    this.navCtrl.navigateForward(['/input']);
  }

  clickItem(path: any) {
    this.navCtrl.navigateForward(['/path'], { queryParams: { location: path.location, hashtag: path.hashtag } });
  }

  deletePaths(path: any) {
    const index = (this.Paths as Array<any>).indexOf(path);
    if (index > -1) {
      this.Paths.splice(index, 1);
    }
  }

}

