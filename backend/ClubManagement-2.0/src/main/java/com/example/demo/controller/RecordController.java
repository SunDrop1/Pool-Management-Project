package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import  com.example.demo.model.competition.Record;
import com.example.demo.service.RecordService;

@RestController
@RequestMapping("/record")
@CrossOrigin("*")
public class RecordController {

	@Autowired
	RecordService recordService;
	
	
	
	
	//Update record
	@PutMapping("/update_record")
	public Record updateRecord(@RequestBody Record record) {
		return recordService.updateRecord(record);
	}
	
	//get record by type
	@GetMapping("/{type}")
	public Record getRecordByType(@PathVariable("type") String type) {
		return recordService.getRecordByType(type);
	}
	
	
	//get record by type
	@GetMapping("/")
	public List<Record> getAllRecords() {
			return this.recordService.getAllRecords();
	}
	
	
	//save all records
	//Update record
	@PutMapping("/update_all_record")
	public List<Record> updateAllRecords(@RequestBody List<Record> records) {
		return recordService.updateAllRecord(records);
	}
	
	
	//delete Record
	@DeleteMapping("/{id}")
	public void deleteRecord(@PathVariable("id") long id) {
		this.recordService.deleteRecord(id);
	}
	
}
