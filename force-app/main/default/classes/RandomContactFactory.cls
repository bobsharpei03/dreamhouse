public class RandomContactFactory {

    public static List<Contact> generateRandomContacts(Integer numConts , String lastName) {

        List<Contact> conts = new List<Contact>();

        for(Integer i=0; i<3; i++){
            Contact c = new Contact(FirstName = 'Test' + i , LastName = lastName + i );

            conts.add(c);

        }
        
        return conts;

    }
}