//ARRAY BASED IMPLEMENTATION
#include <stdio.h>
#define MAX_SIZE 100

struct Stack {
    int top;
    int items[MAX_SIZE];
};

void push(struct Stack *stack, int item) {
    if (stack->top == MAX_SIZE - 1) {
        printf("Stack Overflow\n");
        return;
    }
    stack->items[++stack->top] = item;
}

int pop(struct Stack *stack) {
    if (stack->top == -1) {
        printf("Stack Underflow\n");
        return -1;
    }
    return stack->items[stack->top--];
}

int main() {
    struct Stack stack;
    stack.top = -1;

    push(&stack, 10);
    push(&stack, 20);
    push(&stack, 30);

    printf("Popped element: %d\n", pop(&stack));
    printf("Popped element: %d\n", pop(&stack));

    return 0;
}