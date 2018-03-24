function dimaag(){

	//check diagonal
	if(sectionSpaceString[0] == "empty"){
		if(sectionSpaceString[4] == "cross"){
			if(sectionSpaceString[8] == "cross"){
				addCircle(0);
			}
		}
	}
	if(sectionSpaceString[0] == "cross"){
		if(sectionSpaceString[4] == "empty"){
			if(sectionSpaceString[8] == "cross"){
				addCircle(4);
			}
		}
	}
	if(sectionSpaceString[0] == "cross"){
		if(sectionSpaceString[4] == "cross"){
			if(sectionSpaceString[8] == "empty"){
				addCircle(8);
			}
		}
	}
	if(sectionSpaceString[2] == "cross"){
		if(sectionSpaceString[4] == "empty"){
			if(sectionSpaceString[6] == "cross"){
				addCircle(4);
			}
		}
	}
	if(sectionSpaceString[2] == "cross"){
		if(sectionSpaceString[4] == "cross"){
			if(sectionSpaceString[6] == "empty"){
				addCircle(6);
			}
		}
	}
	if(sectionSpaceString[2] == "empty"){
		if(sectionSpaceString[4] == "empty"){
			if(sectionSpaceString[6] == "cross"){
				addCircle(2);
			}
		}
	}



	//check for horizontal
	if(sectionSpaceString[0] == "cross"){
		if(sectionSpaceString[1] == "cross"){
			if(sectionSpaceString[2] == "empty"){
				addCircle(2);
			}
		}
	}
	if(sectionSpaceString[0] == "cross"){
		if(sectionSpaceString[1] == "empty"){
			if(sectionSpaceString[2] == "cross"){
				addCircle(1);
			}
		}
	}
	if(sectionSpaceString[0] == "empty"){
		if(sectionSpaceString[1] == "cross"){
			if(sectionSpaceString[2] == "cross"){
				addCircle(0);
			}
		}
	}


	if(sectionSpaceString[3] == "cross"){
		if(sectionSpaceString[4] == "cross"){
			if(sectionSpaceString[5] == "empty"){
				addCircle(5);
			}
		}
	}
	if(sectionSpaceString[3] == "cross"){
		if(sectionSpaceString[4] == "empty"){
			if(sectionSpaceString[5] == "cross"){
				addCircle(4);
			}
		}
	}
	if(sectionSpaceString[3] == "empty"){
		if(sectionSpaceString[4] == "cross"){
			if(sectionSpaceString[5] == "cross"){
				addCircle(3);
			}
		}
	} 


	if(sectionSpaceString[6] == "cross"){
		if(sectionSpaceString[7] == "cross"){
			if(sectionSpaceString[8] == "empty"){
				addCircle(8);
			}
		}
	}
	if(sectionSpaceString[6] == "cross"){
		if(sectionSpaceString[7] == "empty"){
			if(sectionSpaceString[8] == "cross"){
				addCircle(7);
			}
		}
	}
	if(sectionSpaceString[6] == "empty"){
		if(sectionSpaceString[7] == "cross"){
			if(sectionSpaceString[8] == "cross"){
				addCircle(6);
			}
		}
	}

	//check for vertical
	if(sectionSpaceString[0] == "cross"){
		if(sectionSpaceString[3] == "cross"){
			if(sectionSpaceString[6] == "empty"){
				addCircle(6);
			}
		}
	}
	if(sectionSpaceString[0] == "cross"){
		if(sectionSpaceString[3] == "empty"){
			if(sectionSpaceString[6] == "cross"){
				addCircle(3);
			}
		}
	}
	if(sectionSpaceString[0] == "empty"){
		if(sectionSpaceString[3] == "cross"){
			if(sectionSpaceString[6] == "cross"){
				addCircle(0);
			}
		}
	}


	if(sectionSpaceString[1] == "cross"){
		if(sectionSpaceString[4] == "cross"){
			if(sectionSpaceString[7] == "empty"){
				addCircle(7);
			}
		}
	}
	if(sectionSpaceString[1] == "cross"){
		if(sectionSpaceString[4] == "empty"){
			if(sectionSpaceString[7] == "cross"){
				addCircle(4);
			}
		}
	}
	if(sectionSpaceString[1] == "empty"){
		if(sectionSpaceString[4] == "cross"){
			if(sectionSpaceString[7] == "cross"){
				addCircle(1);
			}
		}
	} 


	if(sectionSpaceString[2] == "cross"){
		if(sectionSpaceString[5] == "cross"){
			if(sectionSpaceString[8] == "empty"){
				addCircle(8);
			}
		}
	}
	if(sectionSpaceString[2] == "cross"){
		if(sectionSpaceString[5] == "empty"){
			if(sectionSpaceString[8] == "cross"){
				addCircle(5);
			}
		}
	}
	if(sectionSpaceString[2] == "empty"){
		if(sectionSpaceString[5] == "cross"){
			if(sectionSpaceString[8] == "cross"){
				addCircle(2);
			}
		}
	}

	console.log("reached EOP");
	EOP = true;
}