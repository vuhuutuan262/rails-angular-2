import { Component, OnInit } from '@angular/core';

import { SampleService } from './sample.service';
import { Sample } from './sample';

@Component({
  selector: 'samples',
  template:
  `
    <h2>Samples</h2>
    <ul>
      <li *ngFor="let sample of samples">
        <h3>{{sample.title}}</h3>
        <div>{{sample.content}}</div>
      </li>
    </ul>
  `,
  styleUrls: ['./samples.component.css'],
  providers: [SampleService]
})
export class SamplesComponent implements OnInit {
  samples: Sample[];
  constructor(private sampleService: SampleService) {}

  getSamples(): void {
    this.sampleService.getSamples().then(samples => this.samples = samples)
  }

  ngOnInit(): void {
    this.getSamples();
  }
}
