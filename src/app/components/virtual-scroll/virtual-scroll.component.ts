import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport
  personas:any[] = Array(1000).fill(0)

  constructor() { }

  ngOnInit(): void {
  }

  irAlFinal() {
    this.viewport.scrollToIndex( this.personas.length )
  }

  irAlInicio() {
    this.viewport.scrollToIndex( 0 )
  }

  irAlMedio() {
    this.viewport.scrollToIndex( this.personas.length / 2 )
  }
}
