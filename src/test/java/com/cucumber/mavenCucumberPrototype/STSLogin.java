package com.cucumber.mavenCucumberPrototype;


import com.cucumber.mavenCucumberPrototype.util.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class STSLogin {
	WebConnector selenium = WebConnector.getInstance();

	
	@Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
	public void I_go_to_login_url_on_mozilla(String URL,String browser) throws Throwable {
		System.out.println("I go to login url on mozilla");
		selenium.openBrowser(browser);
		selenium.navigate(URL);			
	}
	

	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter(String object,String text) throws Throwable {
		selenium.type(text, object);
	}

	@And("^I click on \"([^\"]*)\"$")
	public void I_Click_On(String object) throws Throwable {
		selenium.click(object);
	}
}
