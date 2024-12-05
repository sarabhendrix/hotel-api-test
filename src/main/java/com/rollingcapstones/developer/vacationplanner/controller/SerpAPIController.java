package com.rollingcapstones.developer.vacationplanner.controller;

import serpapi.*;
import com.google.gson.JsonObject;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class SerpAPIController {

    @GetMapping("/test")
    public String test(){
        // Define the search parameters
        Map<String, String> parameter = new HashMap<>();
        parameter.put("engine", "google_hotels");
        parameter.put("q", "Bali Resorts");
        parameter.put("check_in_date", "2024-12-04");
        parameter.put("check_out_date", "2024-12-05");
        parameter.put("adults", "2");
        parameter.put("currency", "USD");
        parameter.put("gl", "us");
        parameter.put("hl", "en");
        parameter.put("api_key", "[API KEY HERE]"); // Replace with your actual API key

        // Create the GoogleSearch object
        GoogleSearch search = new GoogleSearch(parameter);

        try {
            // Get the search results as JSON
            JsonObject results = search.getJson();
            // Print the results or process further as needed
            return "Search Results: " + results.toString();
        } catch (SerpApiSearchException ex) {
            // Handle errors gracefully
            return "Error during the search request:" + ex.toString();
            //ex.printStackTrace();  // Optionally, print the full stack trace for debugging
        }
    }
}
