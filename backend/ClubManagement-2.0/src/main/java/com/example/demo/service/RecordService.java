package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.competition.Record;
import com.example.demo.repo.RecordRepository;
@Service
public class RecordService {
		
		@Autowired
		RecordRepository recordRepository;
		
		
		//update 
		public Record updateRecord(Record record) {
			Record record1 = recordRepository.getById(record.getId());
			if(record1!=null) {
				record1.setNageLD25(record.getNageLD25());
				
				record1.setNageLD50(record.getNageLD50());
						
				record1.setNageLD100(record.getNageLD100());
						
				record1.setNageLD200(record.getNageLD200());
						
				record1.setNageLD400(record.getNageLD400());
						
				record1.setNageLD800(record.getNageLD800());
						
				record1.setDosD25(record.getDosD25());
						
				record1.setDosD50(record.getDosD50());
						
				record1.setDosD100(record.getDosD100());
						
				record1.setDosD200(record.getDosD100());
						
				record1.setBrasseD100(record.getBrasseD100());
						
				record1.setPapillonD50(record.getPapillonD50());
						
				record1.setPapillonD100(record.getPapillonD100());
						
				record1.setPapillonD200(record.getPapillonD200());
						
				record1.setNage4D200(record.getNage4D200());
						
				record1.setNage4D400(record.getNage4D400());
						
				record1.setNageurLM25(record.getNageurLM25());
						
				record1.setNageurLM50(record.getNageurLM50());
						
				record1.setBrasseM200(record.getBrasseM200());
								
				record1.setBrasseD200(record.getBrasseD200());
						
				record1.setBrasseM50(record.getBrasseM50());
						
				record1.setNageurLM100(record.getNageurLM100());
						
				record1.setNageurLM200(record.getNageurLM200());
						
				record1.setNageurLM400(record.getNageurLM400());
						
				record1.setNageurLM800(record.getNageurLM800());
						
				record1.setNageurLM1500(record.getNageurLM1500());
						
				record1.setDosM25(record.getDosM25());
						
				record1.setDosM50(	record.getDosM50());
						
				record1.setDosM100(record.getDosM100());
						
				record1.setDosM200(record.getDosM200());
						
				record1.setBrasseM100(record.getBrasseM100());
						
				record1.setBrasseD50(record.getBrasseD50());
						
				record1.setPapillonM50(record.getPapillonM50());
						
				record1.setPapillonM100(record.getPapillonM100());
						
				record1.setPapillonM200(record.getPapillonM200());
						
				record1.setNage4M200(record.getNage4M200());
						
				record1.setNage4M400(record.getNage4M400());
				return recordRepository.save(record1);
			}
			else {
				return	recordRepository.save(record);
			}
		}
		
		
		//get record by type
		public Record getRecordByType(String type) {
			return recordRepository.findRecordByType(type);
		}
		
		//get All records 
		public List<Record> getAllRecords(){
			return this.recordRepository.findAll();
		}
		
		
		//save all records
		public List<Record> updateAllRecord(List<Record> records) {
			return recordRepository.saveAll(records);
		}
		
		public void deleteRecord(long id) {
			this.recordRepository.deleteById(id);
		}

}

