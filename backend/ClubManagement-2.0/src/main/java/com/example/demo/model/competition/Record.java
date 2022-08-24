package com.example.demo.model.competition;





import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
public  class Record {
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		long id;
	
		private String nageLD25;
		
		private String nageLD50;
		
		private String nageLD100;
		
		private String nageLD200;
		
		private String nageLD400;
		
		private String nageLD800;
		
		private String dosD25;
		
		private String dosD50;
		
		private String dosD100;
		
		private String dosD200;
		
		private String brasseD100;
		
		private String papillonD50;
		
		private String papillonD100;
		
		private String papillonD200;
		
		private String nage4D200;
		
		private String nage4D400;
		
		private String nageurLM25;
		
		private String nageurLM50;
		
		private String brasseM200;
				
		private String brasseD200;
		
		private String brasseM50;
		
		private String nageurLM100;
		
		private String nageurLM200;
		
		private String nageurLM400;
		
		private String nageurLM800;
		
		private String nageurLM1500;
		
		private String dosM25;
		
		private String dosM50;
		
		private String dosM100;
		
		private String dosM200;
		
		private String brasseM100;
		
		private String brasseD50;
		
		private String papillonM50;
		
		private String papillonM100;
		
		private String papillonM200;
		
		private String nage4M200;
		
		private String nage4M400;
		
		@Column(unique = true)
		String type;
		
		public Record() {}

		public Record(String nageLD25, String nageLD50, String nageLD100, String nageLD200, String nageLD400,
				String nageLD800, String dosD25, String dosD50, String dosD100, String dosD200, String brasseD100,
				String papillonD50, String papillonD100, String papillonD200, String nage4d200, String nage4d400,
				String nageurLM25, String nageurLM50, String brasseM200, String brasseD200, String brasseM50,
				String nageurLM100, String nageurLM200, String nageurLM400, String nageurLM800, String nageurLM1500,
				String dosM25, String dosM50, String dosM100, String dosM200, String brasseM100, String brasseD50,
				String papillonM50, String papillonM100, String papillonM200, String nage4m200, String nage4m400,
				String type) {
			super();
			this.nageLD25 = nageLD25;
			this.nageLD50 = nageLD50;
			this.nageLD100 = nageLD100;
			this.nageLD200 = nageLD200;
			this.nageLD400 = nageLD400;
			this.nageLD800 = nageLD800;
			this.dosD25 = dosD25;
			this.dosD50 = dosD50;
			this.dosD100 = dosD100;
			this.dosD200 = dosD200;
			this.brasseD100 = brasseD100;
			this.papillonD50 = papillonD50;
			this.papillonD100 = papillonD100;
			this.papillonD200 = papillonD200;
			nage4D200 = nage4d200;
			nage4D400 = nage4d400;
			this.nageurLM25 = nageurLM25;
			this.nageurLM50 = nageurLM50;
			this.brasseM200 = brasseM200;
			this.brasseD200 = brasseD200;
			this.brasseM50 = brasseM50;
			this.nageurLM100 = nageurLM100;
			this.nageurLM200 = nageurLM200;
			this.nageurLM400 = nageurLM400;
			this.nageurLM800 = nageurLM800;
			this.nageurLM1500 = nageurLM1500;
			this.dosM25 = dosM25;
			this.dosM50 = dosM50;
			this.dosM100 = dosM100;
			this.dosM200 = dosM200;
			this.brasseM100 = brasseM100;
			this.brasseD50 = brasseD50;
			this.papillonM50 = papillonM50;
			this.papillonM100 = papillonM100;
			this.papillonM200 = papillonM200;
			nage4M200 = nage4m200;
			nage4M400 = nage4m400;
			this.type = type;
		}

		
		
		
}
