import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class ApiService {
    private url = '';
    private headers = new Headers();
    private options = new RequestOptions({headers: this.headers});


    constructor(private http: Http){
    }


    post(path, data){
        return new Promise((resolve, reject) =>{
            this.http.post(`${this.url + path}`, data, this.options)
                .subscribe(res =>{
                    resolve(res.json());
                }, err =>{
                    reject(err.json());
                    this.handleErrors(err);
                })
        })
    }

    get(path){
        return new Promise((resolve, reject) =>{
            this.http.get(`${this.url + path}`, this.options)
                .subscribe(res =>{
                    resolve(res.json());
                }, err =>{
                    reject(err.json());
                    this.handleErrors(err);
                })
        })
    }

    handleErrors(error){
        switch (error.status) {
            case 401: {
                alert(401);
                break;
            }
            case 403 : {
                alert(403);
                break;
            }
            case 500: {
                alert(500);
                break;
            }
        }
    }

    setToken(token){
        this.options.headers.append('Authorization', 'Bearer '+ token);
    }
}
