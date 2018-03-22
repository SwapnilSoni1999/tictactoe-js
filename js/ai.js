var i=0;

function checkCornur(){
	switch(i){
		case 0:{
			if(sectionSpace[0] == 0){
				IsEmpty = true;
				return IsEmpty;
			}
			else{
				i++;
				IsEmpty = false;
				checkCornur();
			}
		}
		case 1:{
			if(sectionSpace[2] == 0){
				IsEmpty = true;
				return IsEmpty;
			}
			else{
				i++;
				IsEmpty = false;
				checkCornur();
			}
		}
		case 2:{
			if(sectionSpace[6] == 0){
				IsEmpty = true;
				return IsEmpty;
			}
			else{
				i++;
				IsEmpty = false;
				checkCornur();
			}
		}
		case 3:{
			if(sectionSpace[8] == 0){
				IsEmpty = true;
				return IsEmpty;
			}
			else{
				i++;
				IsEmpty = false;
				checkCornur();
			}
		}
	}	
}