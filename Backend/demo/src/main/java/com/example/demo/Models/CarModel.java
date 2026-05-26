package com.example.demo.Models;

public class CarModel {

    public String poster;
    public String brand;
    public String model;
    public int speed;
    public int price;

    public CarModel(String poster, String brand , String model, int speed , int price){
        this.poster = poster;
        this.brand = brand;
        this.model = model;
        this.speed = speed;
        this.price = price;
    }
     public CarModel(){}

    void setposter(String poster){ this.poster = poster; }
    String getposter(){return poster; }
    
    void setbrand(String brand){ this.brand = brand;}
    String getbrand(){return brand; }

    void setmodel(String model){ this.model = model;}
    String getmodel(){return model; }

    void setspeed(int speed){ this.speed = speed;}
    int getspeed(){return speed; }

    void setprice(int price){ this.price = price;}
    int getprice(){return price; }



    
}
