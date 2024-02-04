
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome() # or use the appropriate driver for your browser
driver.get("http://localhost:3000") # Adjust the URL to your project's local development URL

try:
    # Select transaction type
    transaction_type_select = driver.find_element(By.ID, "transactionType")
    transaction_type_select.send_keys("withdraw" + Keys.RETURN)
    
    # Enter transaction amount
    amount_input = driver.find_element(By.ID, "transactionAmount")
    amount_input.send_keys("50")
    
    # Execute transaction
    execute_button = driver.find_element(By.ID, "executeTransaction")
    execute_button.click()
    
    # Check balance update - this is simplified and would need to be adjusted based on how balance is displayed
    balance = driver.find_element(By.ID, "accountBalance").text
    print("Updated balance:", balance)
    
finally:
    time.sleep(5) # See the result before closing
    driver.quit()
