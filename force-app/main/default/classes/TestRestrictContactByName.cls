@isTest
public class TestRestrictContactByName {

    @isTest
    public static void TestRestrictContactByName() {

        List<Contact> conts = new List<Contact>
        {
            new Contact(LastName = 'Maquill'),
            new Contact(LastName = 'INVALIDNAME')
        };
        //insert cont;
        Contact contactToUpdate;
        try{
            insert conts;
            contactToUpdate = [Select Id, LastName from Contact
                                Where LastName='Maquill'];

                                contactToUpdate.LastName = 'INVALIDNAME';
                                update contactToUpdate;
        }catch(DmlException e) {
            System.debug('An unecpected error has occurred: ' + e.getMessage());
        }
    }
}