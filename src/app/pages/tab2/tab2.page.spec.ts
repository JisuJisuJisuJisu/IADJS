import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../pages/explore-container/explore-container.module';

import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('컴포넌트 생성 확인', () => {
    expect(component).toBeTruthy();
  });

  it('컴포넌트 안에 getPlaceList 동작 확인', async () => {
    const placeList = await component.getPlaceList()
    expect(Array.isArray(placeList)).toBeTruthy();
  });

});
