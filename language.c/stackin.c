#include<stdio.h>
#define MAXSIZE 10
int stack[MAXSIZE],top=-1;
main()
{
    int choice;
    printf("\n-------------Stack Menu-------------");
    print("\n1.Push\n2.Pop\n3.display\n4.Exit");
    print("\n-------------------------------------");
    printf("\n enter your choice");
    scanf("%d,&choice");
    switch(choice)
    {
        case 1: Push();break;
        case 2: Pop();break;
        case 3: display();break;
        case 4: temp();break;
    }
}
while(choice!=4);
getch();
}
Push()
{
    int n;
    if (top==MAXSIZE-1)
    printf("\nstack is overflow");
    else
    {
        printf("\n enter an element")
        scanf("%d,&n");
        top++;
        stack[top]1=n;
    }
}
Pop()
{
    int n;
    if (top==-1)
    printf("\nstack is empty");
    else
    {
        n=stack[top];
        top--;
    }
}
display()
{
   int n; 
   if(top==-1)
   printf("\nstack is empty");
   else
   {
    printf("\n elements of stack");
    for(i=top;i>=0;i--)
    printf("\n%d",stack[i]);
   }
}
temp()
{
    int i;
    for(i=0;i<=top;i++)
    {
        printf("\n%d",stack[i]);
    }
}
  
