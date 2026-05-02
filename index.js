import express, { text } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Now running with ES Modules!');
});

app.get('/:item', (req, res) => {
    const item = req.params.item.toLowerCase();
    switch (item) {
        case 'stack':
            res.type('text/plain').send(
                `#include <iostream>\n#include <vector>
#include <stdexcept>
 
template<typename T>
class Stack {
private:
    std::vector<T> items;
 
public:
    void push(T element) {
        items.push_back(element);
    }
 
    T pop() {
        if (isEmpty()) throw std::underflow_error("Stack underflow");
        T top = items.back();
        items.pop_back();
        return top;
    }
 
    T peek() const {
        if (isEmpty()) throw std::runtime_error("Stack is empty");
        return items.back();
    }
 
    bool isEmpty() const {
        return items.empty();
    }
 
    int size() const {
        return items.size();
    }
 
    void clear() {
        items.clear();
    }
};
 
// Usage
int main() {
    Stack<int> stack;
    stack.push(10);
    stack.push(20);
    stack.push(30);
    std::cout << stack.peek() << std::endl; // 30
    std::cout << stack.pop()  << std::endl; // 30
    std::cout << stack.size() << std::endl; // 2
    return 0;
}`
            )
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});