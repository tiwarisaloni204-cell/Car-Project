package com.example.demo.Controllers;
import java.util.ArrayList;
import com.example.demo.Models.CarModel;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PutExchange;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@CrossOrigin("*")
public class CarController
{
    static ArrayList <CarModel> cars = new ArrayList< CarModel>();
    CarController(){
        cars.add(new CarModel(
    "https://www.pngarts.com/files/4/BMW-PNG-Background-Image.png",
    "BMW",
    "X5",
    250,
    50000
));

cars.add(new CarModel(
    "https://pngimg.com/uploads/mercedes/mercedes_PNG80146.png",
    "Mercedes",
    "C300",
    240,
    40000
));

cars.add(new CarModel(
    "https://www.pngarts.com/files/8/Audi-Car-PNG-Photo.png",
    "Audi",
    "A4",
    230,
    35000
));

    }

    @GetMapping("/api/Cars")
    public ArrayList<CarModel> getCars(){
        return cars;
    }
    @PostMapping("/api/Cars")
    public String createcar(@RequestBody CarModel newcar){
        cars.add(newcar);
        return "Car added successfully";
    }
    @PutMapping("/api/cars/{id}")
    public String updatecar( @PathVariable int id,@RequestBody CarModel newCar){
        cars.set (id, newCar);
        return "Car updated successfully";
    }
    @DeleteMapping("/api/cars/{id}")
    public String deletecar(@PathVariable int id){
        cars.remove(id);
        return "Car deleted successfully";
    }
}
