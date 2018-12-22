import { Component, OnInit } from '@angular/core';
import { NON_BINDABLE_ATTR } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  // 実行したい処理をここにかく

  result:string="足し算しましょう";
  text1:string="0";
  text2:string="0";
  // 【イベント】「クリックされた」＝＞addAndShowという名前のメソッドを実行する
  addAndShow() : void {
    // addAndShowメソッドの中だけで使用する＝＞ローカル変数
    let forResult:string="正しい値を入力してください";
    let int1:number;
    let int2:number;

    int1 = Number(this.text1);
    int2 = Number(this.text2);

    if(!Number.isNaN(int1) && !Number.isNaN(int2)){
      forResult = `${int1}+${int2}=${int1+int2}`;
    }
    this.result=forResult;
  }
  constructor() { }
  // このコンポーメントが作られるときに実行したいプログラムをかく場所
  ngOnInit() {
  }
  // このコンポーメントが初期化される時に事項したいプログラムをかく場所
  // @Input()でデータバインドされた入力値を初期化後に実行されます。
}
