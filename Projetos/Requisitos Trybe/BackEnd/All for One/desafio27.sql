DELETE FROM northwind.order_details 
WHERE
    unit_price IS NOT NULL;