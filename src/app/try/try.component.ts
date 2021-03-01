import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-try",
  templateUrl: "./try.component.html",
  styleUrls: ["./try.component.css"]
})
export class TryComponent implements OnInit {
  counter1$: Observable<number>;
  counter2$: Observable<number>;

  constructor(private store: Store<{}>) {}

  ngOnInit() {}
}
