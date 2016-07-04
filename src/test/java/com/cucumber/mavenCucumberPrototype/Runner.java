package com.cucumber.mavenCucumberPrototype;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

// runner class

@RunWith(Cucumber.class)
@Cucumber.Options(format={"html:output"},
                  tags={"@Navigation"} )
public class Runner {	
	
	
}



