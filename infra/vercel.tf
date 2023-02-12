terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
    }
  }
}

variable "vercel_api_token" {}
variable "api_url" {}
variable "storyblok_access_token" {}

provider "vercel" {
  api_token = var.vercel_api_token
}

resource "vercel_project" "gorlem" {
  name            = "jetgee-media"
  framework       = "astro"
  build_command   = "yarn build"
  team_id         = "team_cUUJOF5e58em9YTg9UnbzH1n" 
  install_command = "yarn"
  git_repository = {
    type = "github"
    repo = "wrexiv/jetgee-media"
    branch = "main"
    production_branch = "main"
  }
  serverless_function_region = "hnd1"
  environment = [
    {
      key    = "API_URL"
      value  = var.api_url
      target = ["production", "preview"]
    },
    {
      key = "VITE_STORYBLOK_ACCESS_TOKEN"
      value = var.storyblok_access_token
      target = ["production", "preview"]
    }
  ]
}
