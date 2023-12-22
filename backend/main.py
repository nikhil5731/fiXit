

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


qa_array = [
    {"question": "How can a salesperson effectively prepare for a phone call to maximize their chances of success?",
     "answer": "Effective preparation involves researching the prospect, understanding their needs, and scripting key talking points to guide the conversation."},
    
    {"question": "What role does active listening play in improving phone call efficiency?",
     "answer": "Active listening helps salespeople better understand customer needs, allowing them to tailor their pitch and address concerns, ultimately leading to more successful calls."},
    
    {"question": "How can technology be leveraged to streamline the sales call process?",
     "answer": "Integrating Customer Relationship Management (CRM) tools and call automation software can help organize information, track interactions, and automate routine tasks, saving time and increasing efficiency."},
    
    {"question": "What strategies can be employed to handle objections effectively during a sales call?",
     "answer": "Preparing for common objections, empathizing with the customer, and providing well-researched responses can help overcome objections and keep the conversation positive."},
    
    {"question": "In what ways can a salesperson build rapport over the phone?",
     "answer": "Establishing a friendly tone, using the prospect's name, and finding common ground can help build rapport and create a more engaging and positive conversation."},
    
    {"question": "How can a salesperson utilize follow-up calls to strengthen relationships and close deals?",
     "answer": "Regular, well-timed follow-up calls demonstrate persistence, reinforce interest, and provide an opportunity to address any new concerns or questions the prospect may have."},
    
    {"question": "What role does time management play in improving phone call efficiency?",
     "answer": "Creating a structured schedule for making calls, prioritizing leads, and setting specific time limits for conversations helps salespeople stay focused and make the most of their calling time."},
    
    {"question": "How can sales scripts be customized to improve phone call effectiveness?",
     "answer": "Tailoring scripts to address the unique needs and pain points of different customer segments allows salespeople to communicate more effectively and establish a stronger connection with prospects."},
    
    {"question": "What techniques can be used to create a compelling opening statement that captures the prospect's attention?",
     "answer": "Crafting a concise and personalized opening statement that highlights the value proposition and addresses the prospect's specific challenges can grab their attention and set a positive tone for the call."},
    
    {"question": "How can ongoing training and feedback contribute to continuous improvement in phone call efficiency?",
     "answer": "Regular training sessions, feedback from experienced mentors, and analyzing call recordings help salespeople identify areas for improvement, refine their skills, and stay updated on industry best practices."}
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/{query}")
def read_item(query: str):
    for qa_pair in qa_array:
        if query.lower() in qa_pair["question"].lower():
            return {"response":qa_pair["answer"]}
    return {"response":"Sorry, the answer to that question is not available."}
