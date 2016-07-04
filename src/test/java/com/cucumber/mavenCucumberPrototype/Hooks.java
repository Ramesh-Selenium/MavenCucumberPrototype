package com.cucumber.mavenCucumberPrototype;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

import com.cucumber.mavenCucumberPrototype.util.WebConnector;

import cucumber.api.Scenario;
import cucumber.api.java.After;
public class Hooks
{
	WebConnector selenium = WebConnector.getInstance();
	@After
	/**
	* Embed a screenshot in test report if test is marked as failed
	*/
	public void embedScreenshot(Scenario scenario) {
	if(scenario.isFailed()) {
	try {
		scenario.write("Current Page URL is " + selenium.driver.getCurrentUrl());
		byte[] screenshot = ((TakesScreenshot)selenium.driver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot, "image/png");	
		scenario.write("Current Page URL is ");
	} 
	catch (WebDriverException somePlatformsDontSupportScreenshots) {
		System.err.println(somePlatformsDontSupportScreenshots.getMessage());
	} 
	}
	selenium.driver.quit();
	}
}


