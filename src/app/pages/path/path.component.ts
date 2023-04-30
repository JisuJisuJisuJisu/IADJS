import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss']
})
export class PathComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.route.queryParams
      .subscribe((data) => {
        console.log('data: ', data);
      })

    console.log('this.route.snapshot.queryParams: ', this.route.snapshot.queryParams);

    // path/1
    // route.params
    // 1

    // path?a=1&b=2
    // route.queryParams
    // {a:1, b:2}
  }

  someFunc() {

  }





}
