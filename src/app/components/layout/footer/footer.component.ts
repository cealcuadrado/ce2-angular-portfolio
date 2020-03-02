import { Component, OnInit, Input } from '@angular/core';
import { Network } from 'src/app/interfaces/network';
import { NETWORKS } from '../../../constants/networks';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() email: string;
  @Input() nswCode: string;
  @Input() username: string;
  networks: Network[] = NETWORKS;
  currentDate: Date;

  constructor(
    private dateService: DateService,
  ) { }

  ngOnInit() {
    this.currentDate = this.dateService.getDate();
  }

}
