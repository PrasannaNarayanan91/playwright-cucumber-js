Feature: Planit Technical Assesment - Autoamtion
Automating the Test assesment applicaiton

    @test1 @test @debug
    Scenario: Test case 1 : validation of contact form
        Given Validated application launch
        Then Click menu "Contact"
            And Click button "Submit"
        Then Validate the "Forename" field validation error as "Forename is required"
        Then Validate the "Email" field validation error as "Email is required"
        Then Validate the "Message" field validation error as "Message is required"
        Then Enter "Test" in "Forename" field
        Then Enter "test1@test.com" in "Email" field
        Then Enter "Message" in "Message" field
            And Validate error message removed for field "Forename"
            And Validate error message removed for field "Email"
            And Validate error message removed for field "Message"
        

    @test2 @test
    Scenario: Test case 2 : Submit contact form
        Given Validated application launch
        Then Click menu "Contact"
        Then Enter "Test" in "Forename" field
        Then Enter "test1@test.com" in "Email" field
        Then Enter "Message" in "Message" field
            And Click button "Submit"
        Then Validate submission successful page

    @test3 @test
    Scenario: Test case 3 : validation of contact form by entering invalid data
        Given Validated application launch
        Then Click menu "Contact"
        # Forename, Surname and Message are free input window accepting all symbols and alpha numeric skipping the validation
        Then Enter "test" in "Email" field
        Then Validate the "Email" field validation error as "Please enter a valid email"
        Then Enter "Telephone" in "Telephone" field
        Then Validate the "Telephone" field validation error as "Please enter a valid telephone number"

    @test4 @test
    Scenario: Test case 4 : shopping cart
        Given Validated application launch
        Then Click menu "Shop"
            And Add 2 "Stuffed Frog" to cart
            And Add 5 "Fluffy Bunny" to cart
            And Add 3 "Valentine Bear" to cart
            And Click menu "Cart"
            And Validate cart list has 2 "Stuffed Frog"
            And Validate cart list has 5 "Fluffy Bunny"
            And Validate cart list has 3 "Valentine Bear"
        Then Validate the price of "Stuffed Frog" is $10.99 in cart
        Then Validate the price of "Fluffy Bunny" is $9.99 in cart
        Then Validate the price of "Valentine Bear" is $14.99 in cart
        Then Validate the subtotal of "Stuffed Frog" is $21.98 in cart
        Then Validate the subtotal of "Fluffy Bunny" is $49.95 in cart
        Then Validate the subtotal of "Valentine Bear" is $44.97 in cart
            And Validate the total value of product in cart should be 116.9