<?php

/*echo '[
	{
	"Name" : "Mahesh Parashar",
	"RollNo" : 101,
	"Percentage" : "80%"
	},
	{
	"Name" : "Dinkar Kad",
	"RollNo" : 201,
	"Percentage" : "70%"
	},
	{
	"Name" : "Robert",
	"RollNo" : 191,
	"Percentage" : "75%"
	},
	{
	"Name" : "Julian Joe",
	"RollNo" : 111,
	"Percentage" : "77%"
	}
]';*/


$arrayTest=array(
	array("Name" => "Php1", "RollNo" => 105, "Percentage" => "10%"),
	array("Name" => "Php2", "RollNo" => 105, "Percentage" => "20%"),
	array("Name" => "Php3", "RollNo" => 105, "Percentage" => "30%"),
	array("Name" => "Php4", "RollNo" => 105, "Percentage" => "40%"),
	array("Name" => "Php4", "RollNo" => 105, "Percentage" => "40%"),
	array("Name" => "Php4", "RollNo" => 105, "Percentage" => "40%"),
	array("Name" => "Php4", "RollNo" => 105, "Percentage" => "40%")
);

echo json_encode($arrayTest);

?>