package com.mark.NHLStatTrends.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

@Controller
public class APIController {

    @RequestMapping ("/api")
    public @ResponseBody String apiRoute(){
        final String url = "https://api.mysportsfeeds.com/v1.2/pull/nhl/2017-playoff/overall_team_standings.json?teamstats=W,L,GF,GA,Pts)";
                //https://api.mysportsfeeds.com/v1.2/pull/nhl/{season-name}/overall_team_standings.{format}
                //"http://api.com/v1/gifs/search?q=ryan+gosling&api_key=8b6jqzb77sJ11lkhP2MoGZNzFfmfifQ2&limit=5";

        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);

        return result;

    }

}
