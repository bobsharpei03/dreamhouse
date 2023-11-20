import { LightningElement, api } from 'lwc';
import FORM_FACTOR from '@salesforce/client/formFactor';
import { NavigationMixin } from 'lightning/navigation';
import BBQA_Logos from '@salesforce/resourceUrl/BBQA_Logos';

export default class QuickAccessCard extends LightningElement {

    /*
    @api product2;
    @api imageUrl = BackgroundImg + '/images/mtb_logo_white.png';
    //@api url = 'http://www.docusign.com';
    formFactor = FORM_FACTOR;
*/
appResources = {
    ERM_Logo: BBQA_Logos + '/BBQA_Logos/ERM_logo.jpeg',
    Edison_Logo: BBQA_Logos + '/BBQA_Logos/Edison.png',
    ProfitLink: BBQA_Logos + '/BBQA_Logos/ProfitLink.png',
    Tableau: BBQA_Logos + '/BBQA_Logos/tableau.png',
    VerticalIQ: BBQA_Logos + 'BBQA_Logos/VerticalIq.png'
};
 

    navigateToObjectHome() {
        //console.log('#########' + url);
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: '/lightning/o/Event/home/'                   
            }                
        });
    }

    handleNavigate1() {

        const config = {
            type: 'standard__webPage',
            attributes: {
                url: 'https://mtb.seismic.com/app#/home'
            }
        };
        this[NavigationMixin.Navigate](config);
    }

    /*
    handlePropertySelected() {
        if (FORM_FACTOR === 'Small') {
            // In Phones, navigate to property record page directly
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: this.product2.Id,
                    objectApiName: 'product2',
                    actionName: 'view'
                }
            });
        } else {
            // In other devices, send message to other cmps on the page
            const selectedEvent = new CustomEvent('selected', {
                detail: this.product2.Id
            });
            this.dispatchEvent(selectedEvent);
        }
    }

    get backgroundImageStyle() {
        return `background-image:url("${this.imageUrl}")`;
    }
    */
}