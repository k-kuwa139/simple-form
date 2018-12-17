import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  result:string="足し算しましょう";
  // 【イベント】「クリックされた」＝＞addAndShowという名前のメソッドを実行する
  addAndShow() : void {
    // ()の中に引数が入る、voidはデータ型（ここでの意味は値を戻さない）
    this.result="これはテスト";
    // 実行したい処理をここにかく
  }
  constructor() { }
  // このコンポーメントが作られるときに実行したいプログラムをかく場所
  ngOnInit() {
  }
  // このコンポーメントが初期化される時に事項したいプログラムをかく場所
  // @Input()でデータバインドされた入力値を初期化後に実行されます。
}
