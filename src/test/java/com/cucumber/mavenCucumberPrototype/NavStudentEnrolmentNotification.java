package com.cucumber.mavenCucumberPrototype;

import junit.framework.Assert;

import com.cucumber.mavenCucumberPrototype.util.WebConnector;

import cucumber.api.java.en.Then;

public class NavStudentEnrolmentNotification {
	WebConnector selenium = WebConnector.getInstance();

	@Then("^\"([^\"]*)\" page opened$")
	public void page_opened(String expectedResult) throws Throwable {
		boolean result=selenium.isElementPresent(expectedResult);
		System.out.println(result);
		String actualResult=null;
		//expectedResult="success";
		if(result)
			actualResult="success";
		else
			actualResult="failure";
		Assert.assertEquals(expectedResult, actualResult);
	}
	
}
