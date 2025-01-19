//ARRA#include <stdio.h>
#define MAX_SIZE 100

struct Queue {
    int front, rear;
    int items[MAX_SIZE];
};

void enqueue(struct Queue *queue, int item) {
    if (queue->rear == MAX_SIZE - 1) {
        printf("Queue Overflow\n");
        return;
    }
    queue->items[++queue->rear] = item;
}

int dequeue(struct Queue *queue) {
    if (queue->front == -1) {
        printf("Queue Underflow\n");
        return -1;
    }
    return queue->items[queue->front++];
}

// ... other operations like peek, isEmpty, isFullY BASED QUEUE
