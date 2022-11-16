import { Component ,OnInit} from '@angular/core';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WeatherApp';
  countryName:string='cairo';
  data:any;
  constructor(private _weatherService:WeatherService){}
  ngOnInit(): void {
    this.getData(this.countryName);
  }
  getData(cityName:string ='cairo'){
    this._weatherService.getWeatherAPI(cityName).subscribe({
      next:(res)=>{
        this.data=res;
        console.log(this.data);
      }
    });
  }
  getInput(){
    this.getData(this.countryName);
  }
}
