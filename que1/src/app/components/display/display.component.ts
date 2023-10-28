import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //make variables
  vahicleName: string = 'Mastering Angular';
  vahiclePrice: number = 200;
  manufactureDate: Date = new Date(2021, 10, 10);

  vahicles: string[] = ['car', 'bike', 'cycle'];

  selectedvahicle = {};
  vahicle = [
    { id: 1, name: 'car' },
    { id: 2, name: 'bike' },
    { id: 3, name: 'cycle' },
    { id: 4, name: 'truck' },
    { id: 5, name: 'bus' },
  ];

  popUp() {
    const selectedVehicle = this.vahicle.find(
      (v) => v.id === this.selectedvahicle
    );
    if (selectedVehicle) {
      alert(selectedVehicle.name);
    } else {
      alert('No vehicle selected');
    }
  }

  selectedInput = '';
  input: Array<string> = ['textBox', 'textArea'];
}
