import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // Home Page
  getAllTrendingProducts() {
    return this.http.get('../../assets/json/HomePageTrending.json');
  }
  getKeys() {
    return this.http.get('../../assets/json/keys.json');
  }
  // Get All Hepo Products
  getAllHepoProducts() {
    return this.http.get('../../assets/json/Hepo.json');
  }

  // Get All Rehau Products
  getAllRehauProducts() {
    return this.http.get('../../assets/json/Rehau.json');
  }

  // Get All wicker Products
  getAllWickerProducts() {
    return this.http.get('../../assets/json/WickerBaskets.json');
  }

  // Get All flora Products
  getAllFloraProducts() {
    return this.http.get('../../assets/json/Flora.json');
  }

  // Get All Palladium Products
  getAllPalladiumProducts() {
    return this.http.get('../../assets/json/Palladium.json');
  }

  // Get All Telescopic Channel
  getAllTelescopicChannel() {
    return this.http.get('../../assets/json/TelescopicChannel.json');
  }
}
