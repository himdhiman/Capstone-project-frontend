import { Component, OnInit, Input } from '@angular/core';
import { GeneratePinService } from 'src/app/services/generate-pin.service';
import { ChangePinService } from 'src/app/services/change-pin.service';

@Component({
  selector: 'app-atm-pin',
  templateUrl: './atm-pin.component.html',
  styleUrls: ['./atm-pin.component.css']
})
export class AtmPinComponent implements OnInit {
  @Input() setPin: boolean = false;
  @Input() accountNumber: string | null = "";
  atmPin: number | null = null; 
  confirmAtmPin: number | null = null; 
  oldAtmPin: number | null = null; 
  errorString: string = "";
  successString: string = "";
  private generatePin: GeneratePinService;
  private changePin: ChangePinService;

  constructor(generatePin: GeneratePinService, changePin: ChangePinService) {
    this.generatePin = generatePin;
    this.changePin = changePin;
   }

  validate = (): boolean => {
    if(this.atmPin?.toString().length != 4){
      this.errorString = "Pin length should be 4"
      return false;
    }
    if(this.confirmAtmPin !== this.atmPin){
      this.errorString = "Pin should match"
      return false;
    }
    return true;
  }

  validateChangePin = (): boolean => {
    if(this.oldAtmPin?.toString().length != 4){
      this.errorString = "Invalid Old ATM Pin"
      return false;
    }
    if(this.atmPin?.toString().length != 4){
      this.errorString = "Pin length should be 4"
      return false;
    }
    if(this.confirmAtmPin !== this.atmPin){
      this.errorString = "Pin should match"
      return false;
    }
    return true;
  }


  onChangeAtmPin = (event: any) => {
    let nodeVal: string = event.target.value;
    this.atmPin = parseInt(nodeVal);
  }

  onChangeConfirmAtmPin = (event: any) => {
    let nodeVal: string = event.target.value;
    this.confirmAtmPin = parseInt(nodeVal);
  }

  onChangeOldAtmPin = (event: any) => {
    let nodeVal: string = event.target.value;
    this.oldAtmPin = parseInt(nodeVal);
  }

  onSubmit = (event: any) => {
    event.preventDefault();
    var isValid = this.validate()
    if(isValid){
      try {
        this.errorString = "";
        var payload = {
          "accountNumber" : this.accountNumber ? parseInt(this.accountNumber) : 0,
          "atmPin" : this.atmPin,
        } 
        console.log(payload)
        this.generatePin.GeneratePin(payload).subscribe(() => {
          this.successString = "Pin Set Successfull";
        }, (err) => {
          console.error(err)
          this.errorString = "Wrong Pin";
        });
      } catch(err){
        this.errorString = "Server Error !"
      }
    }
  }


  onSubmitChangePin = (event: any) => {
    event.preventDefault();
    var isValid = this.validateChangePin()
    if(isValid){
      try {
        this.errorString = "";
        var payload = {
          "accountNumber" : this.accountNumber ? parseInt(this.accountNumber) : 0,
          "pin" : this.oldAtmPin,
          "newPin" : this.atmPin
        } 
        console.log(payload)
        this.changePin.ChangePin(payload).subscribe(() => {
          this.successString = "Pin Change Successfull";
        }, (err) => {
          console.error(err)
          this.errorString = "Invalid Data";
        });
      } catch(err){
        this.errorString = "Server Error !"
      }
    }
  }

  ngOnInit(): void {
    console.log(this.setPin)
  }

}
