package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/about")
    public String about() {
        return "about";
    }

    @GetMapping("/blog")
    public String blog() {
        return "blog";
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }

    @GetMapping("/elements")
    public String elements() {
        return "elements";
    }


    @GetMapping("/recipes")
    public String recipes() {
        return "recipes";
    }

    @GetMapping("/recipes_details")
    public String recipes_details() {
        return "recipes_details";
    }

    @GetMapping("/singleblog")
    public String singleblog() {
        return "singleblog";
    }
}
