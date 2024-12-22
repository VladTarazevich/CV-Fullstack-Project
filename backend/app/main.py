from fastapi import FastAPI
from fastapi.routing import APIRoute

from app.review.router import router as router_review



app = FastAPI(
    title="CV frontend project"
)

app.include_router(router_review)