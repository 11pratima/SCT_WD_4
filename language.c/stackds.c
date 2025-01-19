#include<stdio.h>
#define MAXSIZE 10
int stack [MAXSIZE],top=-1;
void main()
{
    int choice;
    printf("------stack-------");
    printf("\n1.push\n2.pop\n3.display\n4.exit");
    printf("\n----------");
    printf("\n----------");
    printf("enter your choice");
    scanf("%d",&choice);
    switch(choice)
    {
        case 1: push();break;
        case 2: pop();break;
        case 3: display();break;
        default: printf("invalid choice");

    }
} 