/**
 * Search an element in an unsorted array using minimum number of
 *  comparisons. Given an array of n distinct integers and an element x. 
 * Search the element x in the array using minimum number of comparisons. 
 * Any sort of comparison will contribute 1 to the count of comparisons. 
 * For example, the condition used to terminate a loop, 
 * will also contribute 1 to the count of comparisons each time 
 * it gets executed. 
 * Expressions like while (n) {n–;} also contribute to the count of 
 * comparisons as value of n is being compared internally so as to 
 * decide whether or not to terminate the loop.
 */


 /**
  * How to reduce number of comparisons?
    The idea is to copy x (element to be searched) to last location 
    so that one last comparison when x is not present in arr[] is saved.

Algorithm:

search(arr, n, x)
    if arr[n-1] == x  // 1 comparison
       return "true"
    backup = arr[n-1]
    arr[n-1] = x

    for i=0, i++ // no termination condition
        if arr[i] == x // execute at most n times
                       // that is at-most n comparisons
            arr[n-1] = backup
            return (i < n-1) // 1 comparison
  */

/*package whatever //do not write package name here */

import java.io.*;

class GFG {
	// Function to search an element in 
    // minimum number of comparisons 
    static String search(int arr[], int n, int x) 
    { 
        System.out.println(arr[n - 1]); 
        // 1st comparison 
        if (arr[n - 1] == x) 
            return "Found"; 
  
        int backup = arr[n - 1]; 
        arr[n - 1] = x; 
  
        // no termination condition and thus 
        // no comparison 
        for (int i = 0;; i++) { 
            // this would be executed at-most n times 
            // and therefore at-most n comparisons 
            System.out.println("index "+ i +" - "+ arr[i] +" x: "+x); 
            if (arr[i] == x) { 
                System.out.println("equal--- "+ arr[n - 1] +" -->"+ backup);
                // replace arr[n-1] with its actual element 
                // as in original 'arr[]' 
                arr[n - 1] = backup; 
  
                // if 'x' is found before the '(n-1)th' 
                // index, then it is present in the array 
                // final comparison 
                if (i < n - 1) 
                    return "Found"; 
  
                // else not present in the array 
                return "Not Found"; 
            } 
        } 
    } 
  
    // driver program 
    public static void main(String[] args) 
    { 
        int arr[] = { 4, 6, 1, 5, 8 }; 
        int n = arr.length; 
        int x = 40; 
        System.out.println(search(arr, n, x)); 
    } 
}